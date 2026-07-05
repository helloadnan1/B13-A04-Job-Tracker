let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("InterviewCount");
let rejectedCount = document.getElementById("rejectedCount");

let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

const allCards = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");
const filterdSection = document.getElementById("filtered-section");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

function calculateCount() {
  totalCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toogle(id) {
  console.log("ruba");

  allBtn.classList.remove("bg-[#3B82F6]");
  interviewBtn.classList.remove("bg-[#3B82F6]");
  rejectedBtn.classList.remove("bg-[#3B82F6]");

  allBtn.classList.add("bg-white");
  interviewBtn.classList.add("bg-white");
  rejectedBtn.classList.add("bg-white");

  const selectedbtn = document.getElementById(id);

  currentStatus = id

  selectedbtn.classList.remove("bg-white");
  selectedbtn.classList.add("bg-[#3B82F6]");


  if(id == 'interview-btn'){
    allCards.classList.add('hidden')
    filterdSection.classList.remove('hidden')
    renderInterviewed();
    
  }

  else if(id == 'all-btn'){
    allCards.classList.remove('hidden')
    filterdSection.classList.add('hidden')

  }

  else if(id == 'rejected-btn'){
    allCards.classList.add('hidden')
    filterdSection.classList.remove('hidden')
    renderRejected();

  }
}


mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interviewed")) {
    const parentNode = event.target.parentNode.parentNode;

    const title = parentNode.querySelector(".title").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const details = parentNode.querySelector(".details").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const paragraph = parentNode.querySelector(".paragraph").innerText;

    parentNode.querySelector(".status").innerText = 'Interviewed'

    const cardInfo = {
      title,
      position,
      details,
      status:'Interviewed',
      paragraph,
    };

    console.log(cardInfo);

    const checkExist = interviewList.find(
      (item) => item.title == cardInfo.title,
    );

    

    if (!checkExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(item => item.title != cardInfo.title)

     if(currentStatus == 'rejected-btn'){
      renderRejected();
    }


    calculateCount();

    // renderInterviewed();
  }

  else if (event.target.classList.contains("rejected")) {
    const parentNode = event.target.parentNode.parentNode;

    const title = parentNode.querySelector(".title").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const details = parentNode.querySelector(".details").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const paragraph = parentNode.querySelector(".paragraph").innerText;

    parentNode.querySelector(".status").innerText = 'Rejected'

    const cardInfo = {
      title,
      position,
      details,
      status:'Rejected',
      paragraph,
    };

    console.log(cardInfo);

    const checkExist = rejectedList.find(
      (item) => item.title == cardInfo.title,
    );

    

    if (!checkExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.title != cardInfo.title)

    if(currentStatus == 'interview-btn'){
      renderInterviewed();
    }


    calculateCount();

    
  }
});

function renderInterviewed() {
  filterdSection.innerHTML = "";

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className = "w-[70%] mx-auto bg-white rounded-md mt-5 mb-5 p-6 flex justify-between";
    div.innerHTML = `
         <div class="content space-y-3">
                    <h2 class="text-[#002C5C] font-semibold title">${interview.title}</h2>
                    <h2 class="text-[#64748B] position">${interview.position}</h2>
                    <p class="text-[#64748B] details">${interview.details}</p>
                    <p class="bg-[#00545c37] text-black w-[130px] px-3 py-2 rounded-md status">${interview.status}</p>
                    <p class="paragraph">${interview.paragraph}</p>
                    <button class="border-2 rounded-md border-green-500 text-green-500 px-3 py-2 mr-3">INTERVIEWED</button>
                    <button class="border-2 rounded-md border-red-500 text-red-500 px-3 py-2">REJECTED</button>
                </div>
                <div class="dlt-icon rounded-full border border-amber-200 p-1 w-8 h-8">
                    <i class="fa-regular fa-trash-can"></i>
                </div>

        `

        filterdSection.appendChild(div)
  }
}

function renderRejected() {
  filterdSection.innerHTML = "";

  for (let reject of rejectedList) {
    let div = document.createElement("div");
    div.className = "w-[70%] mx-auto bg-white rounded-md mt-5 mb-5 p-6 flex justify-between";
    div.innerHTML = `
         <div class="content space-y-3">
                    <h2 class="text-[#002C5C] font-semibold title">${reject.title}</h2>
                    <h2 class="text-[#64748B] position">${reject.position}</h2>
                    <p class="text-[#64748B] details">${reject.details}</p>
                    <p class="bg-[#00545c37] text-black w-[130px] px-3 py-2 rounded-md status">${reject.status}</p>
                    <p class="paragraph">${reject.paragraph}</p>
                    <button class="border-2 rounded-md border-green-500 text-green-500 px-3 py-2 mr-3">INTERVIEWED</button>
                    <button class="border-2 rounded-md border-red-500 text-red-500 px-3 py-2">REJECTED</button>
                </div>
                <div class="dlt-icon rounded-full border border-amber-200 p-1 w-8 h-8">
                    <i class="fa-regular fa-trash-can"></i>
                </div>

        `

        filterdSection.appendChild(div)
  }
}
