<template>
<div class="bg-dark text-white h-100 d-flex justify-content-center">
  <div class="d-flex p-5 justify-content-center align-items-center flex-column">
      <h1 class="mb-4">Contact Me</h1>
      <form action="#">
          <div class="row g-8">
              <div class="col-md-6">
                  <label for="FirstName" class="form-label">First Name:</label>
                  <input type="text" class="form-control" id="FirstName">

                  <label for="LastName" class="form-label mt-3">Last Name:</label>
                  <input type="text" class="form-control" id="LastName">

                  <label for="Username" class="form-label mt-3">Username:</label>
                  <input type="text" class="form-control" id="Username">
              </div>
              <div class="col-md-6">
                  <label for="PhoneNumber" class="form-label">Phone Number:</label>
                  <input type="tel" class="form-control" id="phone" placeholder="098 765 4321" pattern="[0-9]{10}" required>

                  <label for="DOB" class="form-label mt-3">Date of Birth:</label>
                  <input type="date" class="form-control" id="DOB">

                  <label for="gender" class="form-label mt-3">Gender:</label>
                  <input list="genders" class="form-control" id="gender">
                  <datalist id="genders">
                      <option value="Male"></option>
                      <option value="Female"></option>
                      <option value="Not Specified"></option>
                  </datalist>
                  <div class="form-check mt-3">
                      <input class="form-check-input" type="checkbox" id="Agree">
                      <label class="form-check-label" for="Agree"> Terms & Conditions</label>
                  </div>
              </div>
          </div>

          <div class="d-grid gap-2 mt-4">
              <button type="submit" class="btn btn-primary">Submit</button>
          </div>
      </form>
  </div>
</div>
</template>

<script>
export default {
  name: "ContactMe"
};
</script>

<style scoped>


.form-control {
            background-color: #343a40;
            color: white;
            border: 1px solid #ccc;
        }

        .form-control:focus,
        .form-control:hover {
            transition: 0.5s;
            background-color: #f8f9fa;
            color: #212529;
            border-color: #ccc;
        }
</style>
