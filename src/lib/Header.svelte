<script lang="ts">
  import maveli from "../assets/images/maveli.png";
</script>

<section>
  <!-- <div class="flex items-center justify-between py-10">
    <div class="flex gap-10">
      <div class="text-sm font-bold uppercase">Works</div>
      <div class="text-sm font-bold uppercase">Contact</div>
    </div>
  </div> -->
  <div
    class="py-20 flex items-center justify-center text-5xl font-serif font-medium flex-col gap-5"
  >
    <div>Bruno Erdison</div>
    <div>UI/UX Interaction Designer</div>
    <div>Based in Poland</div>
  </div>
  <div class="flex py-20">
    <div class=" w-1/4 bg-red-100">a</div>
    <div class="flex-1 flex items-center justify-center">
      <div class="w-[25vw] h-[35vw] rounded-full overflow-hidden border p-7">
        <img
          class="w-full h-full rounded-full object-cover bg-yellow-100"
          src={maveli}
          alt=""
        />
      </div>
    </div>
    <div class=" w-1/4 bg-green-400">b</div>
  </div>
</section>
