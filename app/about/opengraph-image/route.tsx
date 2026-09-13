import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const revalidate = 300;

export async function GET() {
  const regular = readFileSync(join(process.cwd(), "fonts/geist-regular.ttf"));
  const bold = readFileSync(join(process.cwd(), "fonts/geist-bold.ttf"));

  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"64px",background:"#efeadd",color:"#151913",fontFamily:"Geist"}}>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:28}}>
        <div style={{fontFamily:"Geist Bold",fontWeight:900}}>OhHoBa</div>
        <div style={{color:"#355b28",fontSize:20}}>MUSEUM OF FUTURE IMAGINATION</div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:18}}>
        <div style={{fontFamily:"Geist Bold",fontWeight:900,fontSize:118,lineHeight:.86,color:"#78b94b"}}>OhHoBa</div>
        <div style={{fontSize:30,maxWidth:780}}>A creative museum and archive for unusual language, strange ideas, and unfinished expression.</div>
      </div>
      <div style={{fontSize:20,color:"#6f756b"}}>ohhoba.com · COLLECTION 001</div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Geist", data: regular, weight: 400 },
        { name: "Geist Bold", data: bold, weight: 900 },
      ],
    }
  );
}
