<template>
  <div
    class="tools px-32 relative bg-primary flex flex-row items-center justify-between"
  >
    <img
      class="Rectangle62 absolute"
      src="../../assets/images/Rectangle 62.png"
      alt=""
    />
    <img class="Vector absolute" src="../../assets/images/Vector.png" alt="" />
    <img
      class="Vector1 absolute"
      src="../../assets/images/Vector1.png"
      alt=""
    />
    <img
      class="Vector2 absolute"
      src="../../assets/images/Vector2.png"
      alt=""
    />
    <div class="w-1/2">
      <div class="flex items-center mb-6 whitespace-nowrap">
        <img src="../../assets/images/logo.svg" width="134" alt="" />
        <h2 class="text-white font-semibold" style="margin-left: 10px">
          + the tools you loves
        </h2>
      </div>
      <p class="text-blue mb-5 text-base">
        Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem eliteque ut
        curabitur semper in ipsum dolor sit amet, conse ctetu ipsum dolor sit
        amet, conse cteturr.
      </p>
      <p class="text-blue text-base">
        Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem eliteque ut
        curabitur semper in.
      </p>
    </div>
    <div class="flex flex-wrap flex-row w-2/5">
      <Tool
        v-for="(tool, index) in tools"
        :key="'Tool' + index"
        :title="tool.title"
        :image="tool.image"
      ></Tool>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tool from "../Tool.vue";

import DropBoxIcon from "../../assets/images/dropbox-1 1.png";
import CloseIcon from "../../assets/images/close (4) 1.png";
import GoogleDriveIcon from "../../assets/images/google-drive-1 1.png";
import MicrosoftIcon from "../../assets/images/microsoft-5 1.png";
import SharePointIcon from "../../assets/images/microsoft-sharepoint 1.png";
import PipeDriveIcon from "../../assets/images/Pipedrive 1.png";
import ZendeskIcon from "../../assets/images/zendesk-1 1.png";
import SalesforceIcon from "../../assets/images/salesforce-2 1.png";
import ActiveCampaignIcon from "../../assets/images/Group 3.png";
import OneDriveIcon from "../../assets/images/onedrive-1 1.png";
import BoxIcon from "../../assets/images/Group.png";
import CopperIcon from "../../assets/images/Group 2.png";
import HubspotIcon from "../../assets/images/Vector4.png";
import SalesflareIcon from "../../assets/images/image 34.png";
import TeamIcon from "../../assets/images/logo.png";
import ZohoIcon from "../../assets/images/zoho-1 1.png";
import FlexmailIcon from "../../assets/images/image 35.png";

const tools = ref([
  {
    title: "Sharepoint",
    image: SharePointIcon,
  },
  {
    title: "Pipedrive",
    image: PipeDriveIcon,
  },
  {
    title: "Zendesk",
    image: ZendeskIcon,
  },
  {
    title: "Salesforce",
    image: SalesforceIcon,
  },
  {
    title: "Dropbox",
    image: DropBoxIcon,
  },
  {
    title: "ActiveCampaign",
    image: ActiveCampaignIcon,
  },
  {
    title: "One point",
    image: OneDriveIcon,
  },
  {
    title: "GoogleDrive",
    image: GoogleDriveIcon,
  },
  {
    title: "Box",
    image: BoxIcon,
  },
  {
    title: "copper",
    image: CopperIcon,
  },
  {
    title: "Hubspot",
    image: HubspotIcon,
  },
  {
    title: "Salesflare",
    image: SalesflareIcon,
  },
  {
    title: "Teamleader",
    image: TeamIcon,
  },
  {
    title: "CLose",
    image: CloseIcon,
  },
  {
    title: "Zoho",
    image: ZohoIcon,
  },
  {
    title: "Flexmail",
    image: FlexmailIcon,
  },
  {
    title: "Microsoft Dynamics CRM",
    image: MicrosoftIcon,
  },
]);
</script>

<style></style>
