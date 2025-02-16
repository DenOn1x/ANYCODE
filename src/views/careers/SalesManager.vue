<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const salesDeveloperJob = {
  title: 'Sales manager',
  responsibilities: 'Развивать и удерживать текущих клиентов, превращая их в лояльных партнеров. Быть на связи с клиентом: от консультаций до помощи в решении сложных вопросов. Выполнять план продаж, открывая для клиентов новые возможности. Вести CRM (Odoo) и отчётность.',
  requirements: [
    'Опыт не менее 1 года на должности менеджера по работе с клиентами в сфере B2B или по работе с клиентами, в идеале в индустрии SaaS , IT.',
    'Письменный и разговорный английский: B1 и выше.',
    'Глубокие аналитические способности, коммуникативные и презентационные навыки.',
    'Знание CRM системы.'
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
