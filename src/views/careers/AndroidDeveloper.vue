<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const androidDeveloperJob = {
  title: 'Android инженер',
  responsibilities: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores ducimus exercitationem hic in repudiandae sapiente? Adipisci asperiores eum id!',
  requirements: [
    'Опыт разработки под Android от 2-х лет.',
    'Знание Kotlin и принципов ООП, структур данных и классических алгоритмов.',
    'Понимание REST API и принципов чистой архитектуры.',
    'Опыт работы с GIT и умение работать в команде.',
    'Знание архитектурных паттернов MVP, MVVM и Clean Architecture.',
    'Опыт работы с UI (XML, Jetpack Compose).',
    'Опыт работы с сетью (REST API, Retrofit, OkHttp) и данными (Room).',
    'Знание многопоточности (Coroutines, Flow).',
    'Интеграция с внешними сервисами (Firebase).',
    'Опыт работы с тестированием и CI/CD процессами (GitLab CI).'
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
      :title="androidDeveloperJob.title"
      :responsibilities="androidDeveloperJob.responsibilities"
      :requirements="androidDeveloperJob.requirements"
      :conditions="androidDeveloperJob.conditions"
      :location="androidDeveloperJob.location"
      :level="androidDeveloperJob.level"
      :employmentType="androidDeveloperJob.employmentType"
      :workSchedule="androidDeveloperJob.workSchedule"
  />
  <CareersForm/>
</template>

<style scoped lang="scss">

</style>
