import Story from "./util/Story";
import Timeline from "./util/TimeLine";

export default function Home() {
  return (
    <main>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-3"></div>

        <div class="col-span-12 md:col-span-6">
          <Story/>
         <Timeline />
        </div>

        <div class="col-span-12 md:col-span-3"></div>
      </div>
    </main>
  );
}
