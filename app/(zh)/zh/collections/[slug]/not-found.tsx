import type { Metadata } from "next";
import { NotFoundPage } from "@/components/not-found-page";
export const metadata: Metadata = { title: "找不到页面 | OhHoBa", robots: { index: false, follow: false } };
export default function NotFound() { return <NotFoundPage lang="zh" />; }
