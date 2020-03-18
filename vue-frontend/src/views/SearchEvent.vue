<template>
    <div class="search-event">
        <form @submit.prevent="submit">
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
                                        <v-toolbar-title>Форма поиска событий</v-toolbar-title>
                                        <v-spacer></v-spacer>
                                    </v-toolbar>
                                    <v-card-text>
                                        <v-form>
                                            <!--                    // Search event-->
                                            <v-text-field
                                                    :class="{ 'form--error': $v.formModel.search.$error }"
                                                    label="Поиск события"
                                                    name="search"
                                                    prepend-icon="search"
                                                    type="text"
                                                    v-model.trim="$v.formModel.search.$model"
                                            ></v-text-field>
                                            <div class="errors" v-if="formModel.errors">
                                                <div class="error" v-if="!$v.formModel.search.required">
                                                    {{formModel.errorMessages.required}}
                                                </div>
                                            </div>
                                        </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="secondary" @click="resetForm()">Очистить форму</v-btn>
                                        <v-btn color="button primary" type="submit"
                                               :disabled="submitStatus === 'PENDING'">Найти событие
                                        </v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                    <v-card-text>
                                        <p class="typo__p" v-if="submitStatus === 'OK'">Событие найдено!</p>
                                        <p class="typo__p" v-if="submitStatus === 'ERROR'">Пожалуйста, заполните поле
                                            поиска.</p>
                                        <p class="typo__p" v-if="submitStatus === 'PENDING'">Отправляю...</p>
                                        <p class="typo__p" v-if="formModel.formTouched">Поле поиска пусто</p>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-content>
            </v-app>
        </form>
    </div>
</template>

<script>
    import {required} from 'vuelidate/lib/validators'

    export default {
        data: () => ({
            formModel: {
                search: '',
                errors: null,
                formTouched: null,
                errorMessages: {
                    required: ' * Поле поиска пусто',
                }
            },
            submitStatus: null,
        }),
        components: {},
        methods: {
            submit() {
                this.formModel.formTouched = !this.$v.formModel.$anyDirty;
                this.formModel.errors = this.$v.formModel.$anyError;
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR';
                } else {
                    // do your submit logic here
                    this.submitStatus = 'PENDING';
                    setTimeout(() => {
                        this.submitStatus = 'OK';
                    }, 500)
                }
            },
            resetForm() {
                this.formModel.search = '';
                this.formModel.errors = null;
                this.formModel.formTouched = null;
                this.submitStatus = null;
                this.$v.$reset();
            }
        },
        validations: {
            formModel: {
                search: {
                    required,
                },
            }
        }
    }
</script>

<style lang="scss">
    .v-application--wrap {
        min-height: initial !important;
    }

    .form--error {
      input {
        background-color: rgba(255, 0, 0, 0.27);
      }
    }

    .errors {
      position: relative;
      top: -19px;
      padding-left: 33px;

      & > .error {
        padding-left: 5px;
        background-color: rgba(255, 0, 0, 0.27) !important;
        color: #000;
        text-align: left;
      }
    }
</style>
