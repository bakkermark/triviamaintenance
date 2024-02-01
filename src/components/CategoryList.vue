<template>
  <VTable
      height="500"
      fixed-header=""
      class="text-no-wrap"
  >
    <thead>
    <tr>
      <th class="text-uppercase">
        categorie
      </th>
      <th class="text-uppercase">
        description
      </th>
      <th class="text-uppercase">
        sorting
      </th>
    </tr>
    </thead>

    <tbody>
    <tr
        v-for="item in categories"
        :key="item.id"
    >
      <td>
        {{ item.Name }}
      </td>
      <td>
        {{ item.snippet }}
      </td>
      <td>
        {{ item.Sorting }}
      </td>
    </tr>
    </tbody>
  </VTable>
</template>

<script>
export default {
  props: ['categories'],
  setup() {
  }
}
</script>