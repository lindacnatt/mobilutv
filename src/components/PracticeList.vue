<template>
  <div class="practice">
    <v-ons-page>
<!--       <div class="card" v-for="practice in practices" :key="practice.id">
          <div class="practice-header" @click="$router.push({ name: 'PracticeInfo', params: { practiceId: practice.id, practice: practice }})">{{practice.name}}</div>
      </div>
      <PracticeCard/>--> 
    </v-ons-page>
  </div>
</template>

<script>
//import PracticeCard from "./PracticeCard"
export default {
  name: "PracticeList",
  //components: PracticeCard,
  data() {
    return {
      practices: [
        {
          name: "Feel Your Feet",
          moves: [
            "Stand on your feet.",
            "Experience the contact with the ground.",
            "Feel into the soles of the feet.",
            "Feel the knees.",
            "The hips.",
            "The spine.",
            "Shoulders.",
            "Neck.",
            "Head.",
            "Feel the connection between the top of the head and the feet."
          ],
          image: "photo-feet.jpg",
          id: 1
        },
        {
          name: "Feel Your Shoulders",
          moves: [
            "Let your arms hang loose.",
            "Become aware of the shoulders.",
            "Slightly lift one shoulder and release it.",
            "Feel the knees.",
            "The hips.",
            "The spine.",
            "Shoulders.",
            "Neck.",
            "Head.",
            "Experience the breath flowing in and out of the body."
          ],
          image: "photo-shoulders-1.jpg",
          id: 2
        },
          {
          name: "Feel Your Face",
          moves: [
            "Become aware of your face.",
            "Feel the forehead.",
            "The eyebrows.",
            "Eyes.",
            "The hips.",
            "The spine.",
            "Shoulders.",
            "Neck.",
            "Head.",
            "The space surrounding the head."
          ],
          image: "photo-face-unused.jpg",
          id: 3
        },
      ]
    };
  }
};
</script>


<style scoped>
</style>
