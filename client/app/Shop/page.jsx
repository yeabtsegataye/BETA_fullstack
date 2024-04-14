import Advert from "../util/Advet";
import Shoping from "../util/Shoping";

export default function Shop() {
  return (
    <main className="mt-16">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-3">
          <Advert/>
        </div>
        <div class="col-span-12 md:col-span-9">
          <Shoping />
        </div>
      </div>
    </main>
  );
}
