<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const salesDeveloperJob = {
  title: "careers_sales_title",
  responsibilities: "careers_sales_responsibilities",
  requirements: [
    "careers_sales_req_1",
    "careers_sales_req_2",
    "careers_sales_req_3",
    "careers_sales_req_4"
  ],
  conditions: [
    "careers_sales_cond_1",
    "careers_sales_cond_2",
    "careers_sales_cond_3",
    "careers_sales_cond_4",
    "careers_sales_cond_5",
    "careers_sales_cond_6"
  ],
  location: "careers_sales_location",
  level: "careers_sales_level",
  employmentType: "careers_sales_employment",
  workSchedule: "careers_sales_schedule"
};
</script>

<template>
  <CareersVCNS
      :title="$t(salesDeveloperJob.title)"
      :responsibilities="$t(salesDeveloperJob.responsibilities)"
      :requirements="salesDeveloperJob.requirements.map(key => $t(key))"
      :conditions="salesDeveloperJob.conditions.map(key => $t(key))"
      :location="$t(salesDeveloperJob.location)"
      :level="$t(salesDeveloperJob.level)"
      :employmentType="$t(salesDeveloperJob.employmentType)"
      :workSchedule="$t(salesDeveloperJob.workSchedule)"
  />
  <CareersForm/>
</template>
