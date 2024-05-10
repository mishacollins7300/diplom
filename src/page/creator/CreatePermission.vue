<template>
  <div>
    <p class="text-3xl">Создание доступа к плейлисту "Плейлист1"</p>

    <el-form :model="form" class="mt-4" label-width="auto" style="max-width: 600px" label-position="top">
      <el-form-item>
        <el-checkbox label="Временный" size="large" />
      </el-form-item>
      <el-form-item label="Дата">
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="День истечения"
        />
      </el-form-item>
      <el-form-item label="Описание">
        <el-input v-model="form.description" type="textarea" :rows="6"/>
      </el-form-item>
    </el-form>

    <p class="text-2xl">Объект доступа</p>

    <p class="text-2xl mt-8">Поиск объекта доступа</p>

    <div class="flex gap-4">
      <el-input/>
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-button type="primary" @click="() => console.log(4 )">Поиск</el-button>
    </div>

    <el-button class="mt-4" type="primary" style="width: 150px">Сохранить</el-button>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const form = reactive({
  name: '',
  description: '',
})

const value1 = ref('')
const value = ref('')
const options = [
  {
    value: 'USER',
    label: 'Пользователь'
  },
  {
    value: 'GROUP',
    label: 'Группа'
  }
];
</script>

<style scoped>

</style>