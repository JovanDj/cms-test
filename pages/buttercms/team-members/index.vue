<template>
  <b-container>
    <h1>{{ pageTitle }}</h1>

    <b-row>
      <b-col v-for="(member, index) in teamMembers" :key="index" md="4">
        <b-card
          class="mb-3"
          :title="`${member.first_name} ${member.last_name}`"
          :img-src="member.photo"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            {{ member.role }}
          </b-card-text>
          <b-card-text>
            {{ member.department }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import ButterCMS from
import { butter } from '~/plugins/buttercms'

export default {
  name: 'CustomersHome',
  data() {
    return {
      pageTitle: 'Team members (Butter CMS)',
      // Create array to hold the pages from ButterCMS API
      teamMembers: [],
    }
  },
  created() {
    // Fire on page creation
    this.getPages()
  },
  methods: {
    // Get List of Customer Pages
    async getPages() {
      const { data } = await butter.content.retrieve(['team_members'])
      this.teamMembers = data.data.team_members
    },
  },
}
</script>
