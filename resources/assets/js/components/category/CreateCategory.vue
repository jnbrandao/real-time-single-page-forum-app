<template>
    <div>
        <v-container>
            <v-form @submit.prevent="submit">
                <v-text-field
                    label="Category Name"
                    v-model="form.name"
                    required
                ></v-text-field>
                <v-btn type="submit" color="teal">Create</v-btn>
            </v-form>
            <v-card>
                <v-toolbar color="indigo" dark dense>
                <v-toolbar-title>Categories</v-toolbar-title>
                </v-toolbar>
                <v-list>
                    <div v-for="category in categories" :key="category.id">
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-btn icon small>
                                    <v-icon color="orange">edit</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{category.name}}
                                </v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-btn icon small>
                                    <v-icon color="red">delete</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider></v-divider>
                    </div>
                </v-list>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form:{
                    name: null
                },
                categories: {}
            }
        },
        methods: {
            submit () {
                axios.post('api/category', this.form)
                     .then(res => console.log(res.data))
            },
            categoryList(){
                axios.get('api/category')
                     .then(res => this.categories = res.data.data)
            }

        },
        created() {
            this.categoryList()
        }
    }
</script>

<style>

</style>