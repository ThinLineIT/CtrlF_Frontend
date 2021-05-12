<template>
  <div class="dialog">
    <button ref="create-issue" @click="showDialog">
      <RequestIcon class="request" />
    </button>
    <dialog id="issue-dialog">
      <form class="form-dialog" method="dialog">
        <button class="cancel-dialog" value="cancel">X</button>
        <p class="p-dialog">
          <select>
            <option v-for="(topic, i) in getNote.topics" :key="i">
              {{ topic.title }}
            </option>
          </select>
          <input type="text" placeholder="TITLE" />
          <input type="text" placeholder="내용 입력" />
        </p>
        <menu class="menu-dialog">
          <button id="confirmBtn" value="default">REQUEST</button>
        </menu>
      </form>
    </dialog>
  </div>
</template>

<script>
import RequestIcon from "../../assets/REQUEST BUTTON.svg";
import { mapGetters } from "vuex";
export default {
  name: "NoteDialog",
  computed: {
    ...mapGetters(["getNote"]),
  },
  components: {
    RequestIcon,
  },
  data() {
    return {
      dialogButton: "",
      dialogIssue: "",
    };
  },
  methods: {
    showDialog() {
      if (typeof this.dialogIssue.showModal === "function") {
        this.dialogIssue.showModal();
      } else {
        alert("The <dialog> API is not supported by this browser");
      }
    },
  },
  mounted() {
    this.dialogButton = this.$refs["create-issue"];
    this.dialogIssue = document.getElementById("issue-dialog");
  },
};
</script>

<style scoped>
.cancel-dialog {
  padding-right: 31px;
  font-weight: bold;
  font-size: 30px;
}

#confirmBtn {
  width: 100%;
}

.menu-dialog {
  width: 100%;
}

.request {
  width: 31px;
  height: 34px;
  fill: grey;
}

.p-dialog {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-dialog {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

#issue-dialog {
  margin-left: auto;
  height: 700px;
  width: 485px;
  top: 140px;
  right: 261px;
}
</style>
