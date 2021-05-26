<template>
  <div class="dialog">
    <button ref="create-issue" @click="showDialog">
      <RequestIcon class="request" />
    </button>
    <dialog id="dialog-issue">
      <form class="dialog-form" method="dialog">
        <button class="dialog-cancel" value="cancel">X</button>
        <p class="dialog-p">
          <select class="dialog-topic" id="dialog__topic-id">
            <option
              v-for="(topic, i) in getNote.topics"
              :key="i"
              :value="topic.id"
            >
              {{ topic.title }}
            </option>
          </select>
          <input type="text" id="dialog-title" placeholder="TITLE" />
          <textarea
            id="dialog-content"
            placeholder="내용 입력"
            maxlength="100"
            @keyup="textCount"
          />
          <span class="text-number"> {{ textNum }} / 100자 </span>
        </p>
        <menu class="dialog-menu">
          <button id="confirmBtn" @click="requestIssue">REQUEST</button>
        </menu>
      </form>
    </dialog>
  </div>
</template>

<script>
import RequestIcon from "../../assets/REQUEST BUTTON.svg";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NoteDialog",
  computed: {
    ...mapGetters(["getNote", "getDialogIssue"]),
  },
  components: {
    RequestIcon,
  },
  data() {
    return {
      textNum: 0,
    };
  },
  methods: {
    ...mapActions(["dialogLoad", "issuePost"]),
    textCount() {
      let issueContent = document.getElementById("dialog-content");
      this.textNum = issueContent.value.length;
    },
    showDialog() {
      if (typeof this.getDialogIssue.showModal === "function") {
        this.getDialogIssue.showModal();
      } else {
        alert("The <dialog> API is not supported by this browser");
      }
    },
    requestIssue() {
      const issueTitle = document.getElementById("dialog-title");
      const issueBody = document.getElementById("dialog-content");
      if (issueTitle.value !== "" && issueBody.value !== "") {
        const selectOption = document.getElementById("dialog__topic-id");
        const issueArr = [
          selectOption.value,
          this.$route.params.noteID,
          issueTitle.value,
          issueBody.value,
        ];
        this.issuePost(issueArr);
      } else {
        alert("내용을 모두 입력하세요!");
      }
    },
  },
  mounted() {
    const dialog = document.getElementById("dialog-issue");
    this.dialogLoad(dialog);
  },
};
</script>

<style scoped>
.text-number {
  text-align: end;
  margin-right: 27px;
}
.dialog-topic {
  margin: 0px 27px 39px 27px;
  background-color: white;
  height: 51px;
  border-radius: 30px;
  font-weight: bold;
  padding-left: 15px;
  font-size: 25px;
}

#dialog-content {
  padding: 0px 27px 0px 27px;
  height: 205px;
  font-size: 26px;
}

#dialog-title {
  margin: 0px 27px 0px 27px;
  margin-bottom: 25px;
  font-size: 26px;
  font-weight: bold;
  border-bottom: 3px solid #bababa;
  padding-bottom: 10px;
}

.dialog-cancel {
  margin: 24px 31px 43px 0px;
  font-weight: bold;
  font-size: 30px;
}

#confirmBtn {
  width: 172px;
  height: 70px;
  background-color: #bababa;
  box-shadow: 1px 1px 3px #0000004d;
  color: #ffffff;
  border-radius: 30px;
  margin: 37px 0px 37px 0px;
}

.dialog-menu {
  width: 100%;
  text-align: center;
}

.request {
  width: 31px;
  height: 34px;
  fill: grey;
}

.dialog-p {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.dialog-form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

#dialog-issue {
  margin-left: auto;
  height: 700px;
  width: 485px;
  top: 140px;
  right: 261px;
  background-color: #eaeaea;
  border-style: none;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
}

input:focus {
  outline: none;
}

input::placeholder {
  font-size: 26px;
}

textarea:focus {
  outline: none;
}

textarea::placeholder {
  font-size: 26px;
}

select:focus {
  outline: none;
}

select option {
  font-weight: bold;
}
</style>
