<script lang="ts">
  import maveli from "../assets/images/maveli.png";
</script>

<section>
  <div class="flex flex-col lg:flex-row w-full h-screen items-center">
    <div
      class="flex-1 flex flex-col items-center lg:justify-center gap-5 lg:gap-10 order-2 lg:order-1 pb-10 lg:pb-0 pt-5 lg:pt-10"
    >
      <div class="text-4xl lg:text-8xl font-serif text-center lg:text-left">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="text-base font-serif lg:pr-56 text-center lg:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit
        quos officiis, perferendis eveniet explicabo.
      </div>
    </div>
    <div
      class="flex items-center justify-center pt-10 lg:pt-0 lg:w-[30vw] lg:max-h-[30vw] order-1 lg:order-2 pb-5 lg:pb-0"
    >
      <img class="w-full h-full object-contain" src={maveli} alt="maveli" />
    </div>
  </div>
</section>
