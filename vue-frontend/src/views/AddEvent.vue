<template>
  <div class="add-event">
    <v-app id="inspire">
      <v-content>
        <v-container
                fluid
                fill-height
        >
          <v-layout
                  align-center
                  justify-center
          >
            <v-flex
                    xs12
                    sm8
                    md4
            >
              <v-card class="elevation-12">
                <v-toolbar
                        color="primary"
                        dark
                        flat
                >
                  <v-toolbar-title>Форма событий</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
<!--                    // Name-->
                    <v-text-field
                            label="ФИО"
                            name="name"
                            prepend-icon="person"
                            type="text"
                    ></v-text-field>
<!--                    // Unit-->
                    <v-text-field
                            id="unit"
                            label="Подразделение"
                            name="unit"
                            prepend-icon="group"
                            type="text"
                    ></v-text-field>
<!--                    // Event list-->
                    <v-select
                            :items="eventsList"
                            label="Список событий"
                            prepend-icon="format_list_bulleted"
                    ></v-select>
<!--                    // Theme-->
                    <v-text-field
                            id="theme"
                            label="Тема"
                            name="theme"
                            prepend-icon="title"
                            type="text"
                    ></v-text-field>
<!--                    //Content-->
                    <v-text-field
                            id="content"
                            label="Содержание"
                            name="content"
                            prepend-icon="text_fields"
                            type="text"
                    ></v-text-field>
<!--                    // Date picker-->
                    <v-menu
                            v-model="fromDateMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                                label="Дата"
                                prepend-icon="event"
                                readonly
                                :value="fromDateDisp"
                                v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                              locale="ru"
                              v-model="fromDateVal"
                              no-title
                              @input="fromDateMenu = false"
                              :min="minDate"
                      ></v-date-picker>
                    </v-menu>
<!--                    // Time picker-->
                    <v-menu
                            v-model="fromTimeMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                                label="Время"
                                prepend-icon="access_time"
                                readonly
                                :value="fromTimeDisp"
                                v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                              :format="format"
                              v-model="fromTimeVal"
                              no-title
                              @input="fromTimeMenu = false"
                      ></v-time-picker>
                    </v-menu>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="secondary">Очистить форму</v-btn>
                  <v-btn color="primary">Добавить событие</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    data: () => ({
      eventsList: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      fromDateMenu: false,
      fromTimeMenu: false,
      fromDateVal: null,
      fromTimeVal: null,
      minDate: "2020-01-05",
      maxDate: "2019-08-30",
      format: '24hr',
    }),
    computed: {
      fromDateDisp() {
        return this.fromDateVal;
        // format/do something with date
      },
      fromTimeDisp() {
        return this.fromTimeVal;
        // format/do something with date
      },
    }
  }
</script>

<style lang="scss">
  .v-application--wrap {
    min-height: initial;
  }
</style>
