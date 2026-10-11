"use client";

import { useEffect, useState } from "react";

type PreloadProgress = { progress: number; visible: boolean };

function loadImage(src: string): Promise<void> {
  return new Promise<void>((resolve) => {
    const image = new window.Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
    if (image.complete) resolve();
    else image.decode?.().then(resolve).catch(() => undefined);
  });
}

export function BrandPreloader({ lang }: { lang: "en" | "zh" }) {
  const [state, setState] = useState<PreloadProgress>({ progress: 4, visible: true });

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("ohhoba-loader-seen-v31") === "1") {
        document.documentElement.dataset.ohhobaLoaded = "1";
        setState({ progress: 100, visible: false });
        return;
      }
      window.sessionStorage.setItem("ohhoba-loader-seen-v31", "1");
    } catch {
      // The loader still works when storage is unavailable.
    }

    let cancelled = false;
    const start = performance.now();
    const update = (progress: number) => {
      if (!cancelled) setState((current) => ({ ...current, progress: Math.max(current.progress, progress) }));
    };

    const theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const criticalImages = [
      theme === "dark" ? "/images/hero-dark-selected-v33-anchor.webp" : "/images/hero-light-closed-v27.webp",
      "/images/collection-unknown-seed-v32.webp",
      "/images/collection-soft-orbit-v32.webp",
      "/images/collection-almost-language-v32.webp",
    ];
    const totalTasks = criticalImages.length + 1;
    let finishedTasks = 0;
    const finishTask = () => {
      finishedTasks += 1;
      update(8 + Math.round((finishedTasks / totalTasks) * 80));
    };

    const tasks = [
      ...criticalImages.map((src) => loadImage(src).then(finishTask)),
      document.fonts?.ready.then(finishTask).catch(finishTask) ?? Promise.resolve().then(finishTask),
    ];

    const hardLimit = new Promise<void>((resolve) => window.setTimeout(resolve, 4200));
    Promise.race([Promise.all(tasks).then(() => undefined), hardLimit]).then(() => {
      if (cancelled) return;
      const minimumDuration = 560;
      const remaining = Math.max(0, minimumDuration - (performance.now() - start));
      window.setTimeout(() => {
        if (cancelled) return;
        setState({ progress: 100, visible: true });
        window.setTimeout(() => {
          if (!cancelled) {
            setState((current) => ({ ...current, visible: false }));
            document.documentElement.dataset.ohhobaLoaded = "1";
          }
        }, 260);
      }, remaining);
    });

    return () => { cancelled = true; };
  }, []);

  if (!state.visible) return null;

  return (
    <div className="brand-preloader" data-visible={state.progress < 100 ? "loading" : "finishing"} role="status" aria-label={lang === "zh" ? "正在加载 OhHoBa" : "Loading OhHoBa"}>
      <div className="brand-preloader-center">
        <div className="brand-preloader-mark" role="progressbar" aria-label={lang === "zh" ? "加载进度" : "Loading progress"} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.min(100, state.progress)}>
          <img className="brand-preloader-base" src="/images/icon.svg" alt="" />
          <img className="brand-preloader-fill" src="/images/icon.svg" alt="" style={{ clipPath: `inset(${100 - state.progress}% 0 0 0)` }} />
        </div>
        <div className="brand-preloader-caption"><span>OhHoBa</span><span>{Math.min(100, state.progress)}%</span></div>
        <div className="brand-preloader-track" aria-hidden="true"><span style={{ transform: `scaleX(${state.progress / 100})` }} /></div>
        <span className="brand-preloader-note">{lang === "zh" ? "正在打开档案" : "OPENING THE ARCHIVE"}</span>
      </div>
    </div>
  );
}

