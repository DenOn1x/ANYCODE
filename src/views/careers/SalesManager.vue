<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const salesDeveloperJob = {
  title: 'Sales manager',
  responsibilities: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores ducimus exercitationem hic in repudiandae sapiente? Adipisci asperiores eum id!',
  requirements: [

  ],
  conditions: [
    'Стабильная заработная плата, оформление в соответствии с ТК.',
    'График работы 5/2.',
    'Уникальные проекты, амбициозные задачи.',
    'Лояльность и отсутствие бюрократии.',
    'Возможность карьерного, профессионального и финансового роста.',
    'Увлекательные корпоративные мероприятия.'
  ],
  location: 'Минск / Удаленная работа',
  level: 'Middle',
  employmentType: 'Полная',
  workSchedule: 'Рабочий день 5/2'
};
</script>

<template>
  <CareersVCNS
      :title="salesDeveloperJob.title"
      :responsibilities="salesDeveloperJob.responsibilities"
      :requirements="salesDeveloperJob.requirements"
      :conditions="salesDeveloperJob.conditions"
      :location="salesDeveloperJob.location"
      :level="salesDeveloperJob.level"
      :employmentType="salesDeveloperJob.employmentType"
      :workSchedule="salesDeveloperJob.workSchedule"
  />
  <CareersForm/>
</template>

<style scoped lang="scss">

</style>
