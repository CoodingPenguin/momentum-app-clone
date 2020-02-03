import "./styles.css";

const select = document.querySelector(".js-select");

function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

function loadCountries() {
  const selected = localStorage.getItem("country");
  if (selected) {
    // option에서 같은 value를 같고 있는 option을 가져온다
    const option = document.querySelector(`option[value="${selected}"]`);
    // 선택이 되어 있게 만든다
    option.selected = true;
  }
}

loadCountries();
select.addEventListener("change", handleChange);
