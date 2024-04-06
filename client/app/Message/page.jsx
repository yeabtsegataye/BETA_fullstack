import ChatComponent from "../util/Chat";

export default function Message()  {
  return (

         <main>
         <div class="grid grid-cols-12 gap-4">
           <div class="col-span-12 md:col-span-3"></div>
   
           <div class="col-span-12 md:col-span-9">
           <ChatComponent/>

           </div>
   
         </div>
       </main>
)
}
