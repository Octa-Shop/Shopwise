import Image from "next/image"
import facebook from "@/images/facebook.png"
import instagram from "@/images/instagram.png"
import telegram from "@/images/telegram.png"
import snap from "@/images/social.png"



export default function Footer() {
  return (
    // text
    <div className="container   flex justify-between items-center mb-0 ">
        <div className="text-xs">
        &copy; SHOPWISE . all rights are recognized
        </div>

    {/* images */}
        <div className="flex items-center gap-5 cursor-pointer ">
            <Image className="h-5 w-5"
            src={facebook}
            alt="facebook-img"
            />
            <Image className="h-5 w-5"
            src={instagram}
            alt="instagram-img"
            />
            <Image className="h-5 w-5"
            src={telegram}
            alt="telegram-img"
            />
            <Image className="h-5 w-5"
            src={snap}
            alt="snap-img"
            />
        </div>
    </div>
  )
}
