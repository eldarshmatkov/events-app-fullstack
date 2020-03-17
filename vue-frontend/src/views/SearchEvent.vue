<template>
  <div class="search-event">
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
                  <v-toolbar-title>Форма Поиска</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <!--                    // Search event-->
                    <v-text-field
                            label="Поиск события"
                            name="search"
                            prepend-icon="search"
                            type="text"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="secondary">Очистить форму</v-btn>
                  <v-btn color="primary">Найти событие</v-btn>
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
  components: {
  }
}
</script>

<style lang="scss">
  .v-application--wrap {
    min-height: initial;
  }
</style>
