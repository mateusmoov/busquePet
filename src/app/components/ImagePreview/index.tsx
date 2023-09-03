
import Image from "next/image"

export type ImagePreviewProps = {
  src: string
  imageFromUser: boolean
}


 export const ImagePreview = ({ src, imageFromUser }: ImagePreviewProps) => {
   return (
     <div className="bg-zinc-50 border border-dashed border-zinc-400 w-fit rounded relative">
       <div className="absolute -top-3 -right-1">
         {imageFromUser && (
           <button>
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