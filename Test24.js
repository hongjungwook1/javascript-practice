// 아래의 타입의 직군이 각 회사마다 존재하는지 Company 객체 내 메서드로 확인 가능하도록

const type = {
  frontend: {
    option: "FRONTEND_DEVLOPER",
    name: "프론트엔드 개발자",
  },
  backend: {
    option: "BACKEND_DEVELOPER",
    name: "백엔드 개발자",
  },
  manager: {
    option: "PRODUCT_MANAGER",
    name: "프로덕트 매니저",
  },
  owner: {
    option: "PRODUCT_OWNER",
    name: "기획자",
  },
  designer: {
    option: "DESIGNER",
    name: "디자이너",
  },
};

class Company {
  constructor(name, hired) {
    this.name = name;
    this.hired = hired;
  }

  checkHiredEmployee(type) {
    const typeInfo = type.option.toLowerCase().split("_")[0];
    const isHired = this.hired.some((job) => {
      const jobInfo = job.toLowerCase().split(" ")[0];
      const checkJobInfo = jobInfo.includes(typeInfo);
      return checkJobInfo;
    });

    if (isHired) {
      console.log(`${this.name} 내에 ${type.name}가 있습니다`);
    } else {
      console.log(`${this.name} 내에 ${type.name}가 없습니다`);
    }
  }
}

const company_a = new Company("A Company", [
  "Frontend Developer",
  "Backend Developer",
  "Product Manager",
  "Product Owner",
  "Designer",
]);
company_a.checkHiredEmployee(type.frontend);

const company_b = new Company("B Company", [
  "Backend Developer",
  "Product Owner",
  "Designer",
]);
company_b.checkHiredEmployee(type.frontend);

const company_c = new Company("C Company", [
  "Frontend Developer",
  "Product Manager",
  "Designer",
]);
company_c.checkHiredEmployee(type.frontend);

const company_d = new Company("D Company", [
  "Backend Developer",
  "Product Owner",
]);
company_d.checkHiredEmployee(type.frontend);

// A Company 내에 프론트엔드 개발자가 있습니다.
// B Company 내에 프론트엔드 개발자가 없습니다.
// C Company 내에 프론트엔드 개발자가 있습니다.
// D Company 내에 프론트엔드 개발자가 없습니다.
