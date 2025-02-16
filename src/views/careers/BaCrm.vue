<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const baDeveloperJob = {
      title: 'Odoo разработчик',
      responsibilities: 'Разработка CRM системы на платформе Odoo. Развертывание и доработка модулей в соответствии с функциональными спецификациями.',
      requirements: [
        'Уверенное знание Python.',
        'Опыт работы с Odoo от 1 года.',
        'Знание архитектуры фреймворка Odoo.',
        'Уверенный пользователь Linux.',
        'Знание концепции MVC, шаблонов проектирования.'

      ],
      conditions: [
        'Стабильная заработная плата, оформление в соответствии с ТК.',
        'График работы 5/2.',
        'Уникальные проекты, амбициозные задачи.',
        'Лояльность и отсутствие бюрократии.',
        'Возможность карьерного, профессионального и финансового роста.',
        'Увлекательные корпоративные мероприятия.'
      ],
      location:
          'Минск / Удаленная работа',
      level:
          'Middle',
      employmentType:
          'Полная',
      workSchedule:
          'Рабочий день 5/2'
    }
;
</script>

<template>
  <CareersVCNS
      :title="baDeveloperJob.title"
      :responsibilities="baDeveloperJob.responsibilities"
      :requirements="baDeveloperJob.requirements"
      :conditions="baDeveloperJob.conditions"
      :location="baDeveloperJob.location"
      :level="baDeveloperJob.level"
      :employmentType="baDeveloperJob.employmentType"
      :workSchedule="baDeveloperJob.workSchedule"
  />
  <CareersForm/>
</template>

<style scoped lang="scss">

</style>
