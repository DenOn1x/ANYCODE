<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const baDeveloperJob = {
  title: "careers_odoo_title",
  responsibilities: "careers_odoo_responsibilities",
  requirements: [
    "careers_odoo_req_1",
    "careers_odoo_req_2",
    "careers_odoo_req_3",
    "careers_odoo_req_4",
    "careers_odoo_req_5"
  ],
  conditions: [
    "careers_odoo_cond_1",
    "careers_odoo_cond_2",
    "careers_odoo_cond_3",
    "careers_odoo_cond_4",
    "careers_odoo_cond_5",
    "careers_odoo_cond_6"
  ],
  location: "careers_odoo_location",
  level: "careers_odoo_level",
  employmentType: "careers_odoo_employment",
  workSchedule: "careers_odoo_schedule"
};
</script>

<template>
  <CareersVCNS
      :title="$t(baDeveloperJob.title)"
      :responsibilities="$t(baDeveloperJob.responsibilities)"
      :requirements="baDeveloperJob.requirements.map(key => $t(key))"
      :conditions="baDeveloperJob.conditions.map(key => $t(key))"
      :location="$t(baDeveloperJob.location)"
      :level="$t(baDeveloperJob.level)"
      :employmentType="$t(baDeveloperJob.employmentType)"
      :workSchedule="$t(baDeveloperJob.workSchedule)"
  />
  <CareersForm/>
</template>

<style scoped lang="scss">

</style>
