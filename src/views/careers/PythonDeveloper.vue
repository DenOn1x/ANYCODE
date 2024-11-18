<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const pythonDeveloperJob = {
  title: 'Бэкенд инженер Python',
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
      :title="pythonDeveloperJob.title"
      :responsibilities="pythonDeveloperJob.responsibilities"
      :requirements="pythonDeveloperJob.requirements"
      :conditions="pythonDeveloperJob.conditions"
      :location="pythonDeveloperJob.location"
      :level="pythonDeveloperJob.level"
      :employmentType="pythonDeveloperJob.employmentType"
      :workSchedule="pythonDeveloperJob.workSchedule"
  />
  <CareersForm/>
</template>

<style scoped lang="scss">

</style>
