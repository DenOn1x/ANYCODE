<script setup>
import CareersVCNS from "@/components/Careers/CareersVCNS.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";

const androidDeveloperJob = {
  title: "careers_android_title",
  responsibilities: "careers_android_responsibilities",
  requirements: [
    "careers_android_req_1",
    "careers_android_req_2",
    "careers_android_req_3",
    "careers_android_req_4",
    "careers_android_req_5",
    "careers_android_req_6",
    "careers_android_req_7",
    "careers_android_req_8",
    "careers_android_req_9",
    "careers_android_req_10"
  ],
  conditions: [
    "careers_android_cond_1",
    "careers_android_cond_2",
    "careers_android_cond_3",
    "careers_android_cond_4",
    "careers_android_cond_5",
    "careers_android_cond_6"
  ],
  location: "careers_android_location",
  level: "careers_android_level",
  employmentType: "careers_android_employment",
  workSchedule: "careers_android_schedule"
};
</script>

<template>
  <CareersVCNS
      :title="$t(androidDeveloperJob.title)"
      :responsibilities="$t(androidDeveloperJob.responsibilities)"
      :requirements="androidDeveloperJob.requirements.map(key => $t(key))"
      :conditions="androidDeveloperJob.conditions.map(key => $t(key))"
      :location="$t(androidDeveloperJob.location)"
      :level="$t(androidDeveloperJob.level)"
      :employmentType="$t(androidDeveloperJob.employmentType)"
      :workSchedule="$t(androidDeveloperJob.workSchedule)"
  />
  <CareersForm />
</template>
