<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const pythonDeveloperJob = {
  title: "careers_python_title",
  responsibilities: "careers_python_responsibilities",
  requirements: [
    "careers_python_req_1",
    "careers_python_req_2",
    "careers_python_req_3",
    "careers_python_req_4",
    "careers_python_req_5"
  ],
  conditions: [
    "careers_python_cond_1",
    "careers_python_cond_2",
    "careers_python_cond_3",
    "careers_python_cond_4",
    "careers_python_cond_5",
    "careers_python_cond_6"
  ],
  location: "careers_python_location",
  level: "careers_python_level",
  employmentType: "careers_python_employment",
  workSchedule: "careers_python_schedule"
};
</script>

<template>
  <CareersVCNS
      :title="$t(pythonDeveloperJob.title)"
      :responsibilities="$t(pythonDeveloperJob.responsibilities)"
      :requirements="pythonDeveloperJob.requirements.map(key => $t(key))"
      :conditions="pythonDeveloperJob.conditions.map(key => $t(key))"
      :location="$t(pythonDeveloperJob.location)"
      :level="$t(pythonDeveloperJob.level)"
      :employmentType="$t(pythonDeveloperJob.employmentType)"
      :workSchedule="$t(pythonDeveloperJob.workSchedule)"
  />
  <CareersForm/>
</template>
