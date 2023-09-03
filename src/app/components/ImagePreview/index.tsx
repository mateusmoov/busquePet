
import Image from "next/image"
import { twMerge } from "tailwind-merge"

export type ImagePreviewProps = {
  src: string
  imageFromUser: boolean
  onCloseClick?: () => void;
}


 export const ImagePreview = ({
   src,
   imageFromUser,
   onCloseClick,
 }: ImagePreviewProps) => {
   return (
     <div
       className={twMerge(
         "bg-zinc-50 border-zinc-400 w-fit rounded relative",
         !imageFromUser && "border border-dashed"
       )}
     >
       <div className="absolute -top-3 -right-1">
         {imageFromUser && (
           <button onClick={onCloseClick}>
             <Image
               src="/icons/close.svg"
               alt="Apagar imagem"
               width="10"
               height="10"
             />
           </button>
         )}
       </div>
       {!imageFromUser ? (
         <div className="px-4 py-4">
           <Image
             src={src}
             alt="Icone de pré visualização de imagem"
             width="14"
             height="14"
           />
         </div>
       ) : (
         <div className="max-h-fit">
           <Image
             src={src}
             alt="Icone de pré visualização de imagem"
             width="42"
             height="42"
           />
         </div>
       )}
     </div>
   );
 };