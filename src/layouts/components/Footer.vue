<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      Made with
      <VIcon
        icon="tabler-heart"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      By <a
        href="https://multimediamarkers.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >MultiMediaMarkers</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
          href="https://console.firebase.google.com/u/0/project/dev-trivia-9f984/overview"
          target="noopener noreferrer"
      >Overview FB</a>
      <a
        href="https://console.firebase.google.com/u/0/project/dev-trivia-9f984/hosting/sites/dev-trivia-9f984"
        target="noopener noreferrer"
      >Hosting FB</a>
      <a
        href="https://console.firebase.google.com/u/0/project/dev-trivia-9f984/firestore/data/~2FTriviaCategories_gb~2F3B2iTzhkcn0H6ZKUUeD4"
        target="noopener noreferrer"
      >Database FS</a>
      <a
        href="https://console.firebase.google.com/u/0/project/dev-trivia-9f984/storage/dev-trivia-9f984.appspot.com/files"
        target="noopener noreferrer"
      >Storage FS</a>
      <a
          href="https://demos.pixinvent.com/vuexy-vuejs-admin-template/documentation/"
          target="noopener noreferrer"
      >Template documentation</a>
      <a
          href="https://tablericons.com/"
          target="noopener noreferrer"
      >Tabler icons</a>
    </span>
  </div>
</template>
<script setup>
</script>