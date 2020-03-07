import studentData from './helpers/data/studentData';
import navbar from './components/navbar/navbar';
import studentList from './components/studentList/studentList';
import buttonGroup from './components/buttonGroup/buttonGroup';
import '../styles/main.scss';

const init = () => {
  const allStudents = studentData.getStudents();
  navbar.loadNavbar();
  studentList.createStudentList(allStudents);
  buttonGroup.createHouseButtonGroup();
};

init();
