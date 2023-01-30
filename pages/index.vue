<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card max-width="600" class="mx-auto">
        <v-toolbar color="blue">
          <v-app-bar-nav-icon>
            <v-icon color="white">mdi-format-align-justify</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title color="white">Checklists</v-toolbar-title>
          <v-spacer />
          <AddTaskForm />
        </v-toolbar>
      </v-card>

      <v-card>
        <v-tabs>
          <v-tab href="#pending">Pending</v-tab>
          <v-tab href="#completed">Completed</v-tab>

          <v-tab-item value="pending">
            <v-list>
              <v-list-item-group multiple>
                <TaskItem
                  v-for="(task, i) in pendingTasks"
                  :key="i"
                  :task="task"
                />
              </v-list-item-group>
            </v-list>
          </v-tab-item>

          <v-tab-item value="completed">
            <v-list>
              <v-list-item-group multiple>
                <TaskItem
                  v-for="(task, i) in doneTasks"
                  :key="i"
                  :task="task"
                />
              </v-list-item-group>
            </v-list>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TaskItem from "~/components/TaskItem";
import AddTaskForm from "~/components/AddTaskForm";
import { mapGetters } from "vuex";
export default {
  name: "index",
  components: { AddTaskForm, TaskItem },

  mounted() {
    this.$store.dispatch("task/init");
  },

  computed: {
    ...mapGetters({
      doneTasks: "task/doneTasks",
      pendingTasks: "task/pendingTasks",
    }),
  },
};
</script>

<style>
</style>
