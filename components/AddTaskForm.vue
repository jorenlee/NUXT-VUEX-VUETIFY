<template>
  <v-dialog v-model="dialog" max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon color="white">mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline teal--text">
        Create new Task
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="form.item"
            :rules="rules.item"
            label="Add an Item Here"
            required
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal" text @click="save">
          Add Item
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddTaskForm",

  data () {
    return {
      dialog: false,
      form: {
        item: null,
      },
      rules: {
        item: [
          v => !!v || 'Item is required',
          v => (v && v.length >= 2) || 'Item must be bigger than 2 characters',
        ],
      }
    }
  },

  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('task/add', this.form)
        this.$refs.form.reset()
        this.dialog = false
      }
    }
  },
}
</script>

<style scoped>
</style>