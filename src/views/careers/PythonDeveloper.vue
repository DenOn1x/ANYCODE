<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const pythonDeveloperJob = {
  title: 'Бэкенд инженер Python',
  responsibilities: 'Разрабатывать новые серверные приложения, поддерживать и оптимизировать существующие сервисы.Разрабатывать модули интеграции со сторонними сервисами.',
  requirements: [
    'Опыт работы с Docker, Redis, RabbitMQ, PostgreSQL, Python3, Django Rest Framework, Celery.',
    'Знание основ RESTful API, асинхронного программирования.',
    'Умение писать чистый, тестируемый и документированный код.',
    'Умение работать в команде, использовать системы контроля версий (Git) и инструменты совместной разработки (Worksection, Slack).',
    'Желание изучать новые технологии и решать сложные задачи.'
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
