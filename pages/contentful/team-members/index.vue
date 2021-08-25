<template>
  <b-container>
    <h1>{{ pageTitle }}</h1>

    <b-row>
      <b-col v-for="(member, index) in teamMembers" :key="index" md="4">
        <b-card
          class="mb-3"
          :title="`${member.firstName} ${member.lastName}`"
          :img-src="member.photo.fields.file.url"
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
import { contentful } from '~/plugins/contentful'

export default {
  data() {
    return {
      pageTitle: 'Team members (Contentful CMS)',
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
      const entries = await contentful.getEntries({
        content_type: 'teamMember',
        include: 2,
      })

      // log the title for all the entries that have it
      entries.items.forEach((entry) => {
        this.teamMembers.push({
          ...entry.fields,
        })
      })
    },
  },
}
</script>
