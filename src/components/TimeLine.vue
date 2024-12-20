<template>
  <div class="conatainer-fluid text-center">
    <h1 class="text-white">Timeline</h1>
  </div>
  <div class="container py-5">
    <div class="main-timeline">
      <div class="timeline left">
        <div class="card">
          <div class="card-body p-4">
            <div class="mb-4">
              <p class="fs-4 fw-bold">2021 - YouTube Video Downloader:</p>
              <ul class="ms-4">
                <li>Developed a Python application to download YouTube videos...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline right">
        <div class="card">
          <div class="card-body p-4">
            <div class="mb-4">
              <p class="fs-4 fw-bold">2022-SSIP Hackathon</p>
              <ul class="ms-4">
                <li>Created a web project with ReactJS and Node.js...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline left">
        <div class="card">
          <div class="card-body p-4">
            <div class="mb-4">
              <p class="fs-4 fw-bold">2024 - Trivlearn:</p>
              <ul class="points ms-4">
                <li>Developed "Trivlearn," a dynamic quiz website...</li>
                <li>Built functionalities for user registration, personalized quizzes...</li>
                <li>Conducted thorough testing, ensuring a 95% bug-free launch...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline right">
        <div class="card">
          <div class="card-body p-4">
            <div class="mb-4">
              <p class="fs-4 fw-bold">2024 - Bluestar LTD:</p>
              <ul class="ms-4">
                <li>Ensured seamless data flow between ReactJS front-end and Node.js back-end...</li>
                <li>Implemented encrypted password storage using bcrypt...</li>
                <li>Created detailed activity logs, added search and filter functionalities...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline left">
        <div class="card">
          <div class="card-body p-4">
            <div class="mb-4">
              <p class="fs-4 fw-bold">2024 - Sign Language Interpreter</p>
              <ul class="ms-4">
                <li>Designed and implemented a CNN achieving 94% accuracy...</li>
                <li>Built a responsive web application using Flask...</li>
                <li>Preprocessed and augmented dataset images...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine'
}
</script>

<style scoped>

/* The actual timeline (the vertical ruler) */
.main-timeline {
  position: relative;
  z-index: 1;
}

.main-timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #939597;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.timeline {
  position: relative;
  background-color: inherit;
  width: 50%;
}

.timeline::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -13px;
  background-color: #939597;
  border: 5px solid #f5df4d;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.left {
  padding: 0px 40px 20px 0px;
  left: 0;
}

.right {
  padding: 0px 0px 20px 40px;
  left: 50%;
}

.left::before {
  content: " ";
  position: absolute;
  top: 18px;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

.right::before {
  content: " ";
  position: absolute;
  top: 18px;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

.right::after {
  left: -12px;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 600px) {
  .main-timeline::after {
    left: 31px;
  }

  .timeline {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .timeline::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  .left::after,
  .right::after {
    left: 18px;
  }

  .left::before {
    right: auto;
  }

  .right {
    left: 0%;
  }
}

</style>
