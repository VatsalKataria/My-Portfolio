<template>
  <div class="h-100 w-100 p-5 d-flex flex-column justify-content-center align-content-center bg-dark">
    <div class="top text-center py-4">
      <p class="MainHeading display-5 fw-bold text-white">Projects</p>
      <p class="lead text-white">These are some of my projects that I've worked on while trying to make a career</p>
    </div>

    <div class="section">
      <p class="sub-heading fs-3 fw-bold text-center pb-2 text-white border-bottom">Work Experiences</p>
      <div class="sub-section mb-4">
        <p class="sub-sub-heading fs-4 fw-bold text-white">Bluestar LTD:</p>
        <ul class="points ms-4 text-white">
          <li>Ensured seamless data flow between ReactJS front-end and Node.js back-end...</li>
          <li>Implemented encrypted password storage using bcrypt...</li>
          <li>Created detailed activity logs, added search and filter functionalities...</li>
        </ul>
      </div>

      <p class="sub-heading fs-3 fw-bold text-center border-bottom pb-2 text-white">College Projects</p>

      <div class="sub-sections row">
        <div class="sub-section col-md-6 mb-4">
          <p class="sub-sub-heading fs-4 fw-bold text-white">Sign-Language Interpreter:</p>
          <ul class="points list-unstyled ms-4 text-white">
            <li>Designed and implemented a CNN achieving 94% accuracy...</li>
            <li>Built a responsive web application using Flask...</li>
            <li>Preprocessed and augmented dataset images...</li>
          </ul>
        </div>

        <div class="sub-section col-md-6 mb-4">
          <p class="sub-sub-heading fs-4 fw-bold text-white">Trivlearn:</p>
          <ul class="points list-unstyled ms-4 text-white">
            <li>Developed "Trivlearn," a dynamic quiz website...</li>
            <li>Built functionalities for user registration, personalized quizzes...</li>
            <li>Conducted thorough testing, ensuring a 95% bug-free launch...</li>
          </ul>
        </div>

        <div class="sub-section col-md-6 mb-4">
          <p class="sub-sub-heading fs-4 fw-bold text-white">SSIP Hackathon 2022:</p>
          <ul class="points list-unstyled ms-4 text-white">
            <li>Created a web project with ReactJS and Node.js...</li>
          </ul>
        </div>

        <div class="sub-section col-md-6 mb-4">
          <p class="sub-sub-heading fs-4 fw-bold text-white">YouTube Video Downloader:</p>
          <ul class="points list-unstyled ms-4 text-white">
            <li>Developed a Python application to download YouTube videos...</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollegeWork'
}
</script>

<style scoped>
@media (max-width: 768px) {
  .sub-sections {
    grid-template-columns: 1fr;
  }
}
</style>
