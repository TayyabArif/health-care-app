import { Grid, Typography } from "@mui/material";
import React from "react";
import PriceTable from "./PriceTable";

const covidList = [
  "COVID-19 Isolation Rooms",
  "A separate Medical ICU and labor rooms",
  "A theatre facility for COVID-19 Positive Mothers",
  "Separate Dialysis Facility",
];
const facilities = [
  "Hameed Latif Hospital Doctors: 100+",
  "Number of Beds: 324",
];
const departments = [
  "General Surgery",
  "Gastroenterology",
  "Dental Surgery",
  "Pulmonology",
  "Clinical Psychology",
  "Psychiatry",
  "Ophthalmology",
  "Physiotherapy",
  "Radiology",
  "Plastic Surgery",
  "Neurosurgery & Spine",
  "Cardiac Surgery",
  "Cardiothoracic & Vascular Surgery",
  "Nutrition/Dietitian",
  "Interventional Cardiologist",
  "Endocrinologist",
  "Anesthesiology",
  "Rheumatology",
  "ENT",
  "Orthopedic",
];
const services = [
  {
    name: "Services for Outpatients:",
    desc: "The hospital offers OPD services throughout the week, where doctors from all specialties are available to check patients at different times of the day.",
  },
  {
    name: "Emergency Services Open 24/7:",
    desc: "Hameed Latif Hospital's Emergency and Trauma Services are available 24 hours a day, seven days a week, for patients in life-threatening situations.",
  },
  {
    name: "Outreach Services for Critical Care:",
    desc: " In Hameed Latif Hospital, the Critical Care Outreach Team is involved in providing early, skilled assistance to staff caring for patients who are not well. Arranging for them to be admitted to the Intensive Care Unit.",
  },
  {
    name: "Post Intensive Care Service: ",
    desc: "The Critical Treatment Team is actively involved in the Post-Critical Care Follow-up Clinic, where they provide care and support to patients who are at risk of developing Post-Intensive Care Syndrome.",
  },
];
const wards = [
  {
    name: "Critical Care Unit:",
    desc: "On the 5th Floor, there is a cutting-edge 19-bed multi-disciplinary Critical Care Unit. The HLH, Critical Care Team, treats a wide spectrum of medical and surgical illnesses, including bariatric, gynecological, obstetric, trauma, renal, neurological, and cardiac diseases.",
  },
  {
    name: "Intensive care units:",
    desc: "The intensive care unit delivers compassionate and high-quality treatment for severely sick patients with complicated requirements. They care for patients who need extensive respiratory support (ventilation), advanced renal support (hemofiltration), and other sophisticated treatments.",
  },
  {
    name: "High Dependency Units:",
    desc: " These units are for patients who require close monitoring and single organ support.",
  },
  {
    name: "Surgical Intensive Care Unit:",
    desc: "It is an 8-bed Surgical High Dependency Unit, where the Critical Care Team cares for patients with high-risk co-morbidities having complex surgical procedures.",
  },
];
const labServices = [
  "blood glucose test",
  "liver function test",
  "cholesterol test",
  "triglyceride level test",
  "high-density lipoprotein (HDL) level test",
  "low-density lipoprotein (LDL) level test",
  "basic metabolic panel",
  "renal function panel",
  "many other advanced diagnostic tests",
];
const otherFacilities = [
  "Basement 1,2 and 3 Parking.",
  "Main lobby, Reception Area, Admission Office, Corporate Patient’s Office and lift lobby",
  "Gynecology & Obstetrics, Well baby Nursery",
  "Cardiology & Neurosurgery",
  "Laparoscopic and Orthopedic Operation theaters, female Qamar Zaman ward and Cafeteria",
  "Oncology",
  "Adult Intensive Care Unit (ICU)",
  "Affordable Private Room charges",
  "Private Suites and Hydrotherapy Unit",
];
const doctorsList = [
  "Asst. Prof. Dr. Salman Javed",
  "Prof. Dr. Nazli Hameed",
  "Prof. Dr. Talat Naheed",
  "Dr. Ayesha Shahid Sheikh",
  "Asst. Prof. Dr. Rashid Imran",
];
const HospitalAbout = () => {
  return (
    <Grid
      container
      item
      direction="column"
      sx={{ width: "100%", height: "100%" }}
    >
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "90%", pb: 4 }}
      >
        About Hameed Latif Hospital
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "90%", pb: 2 }}
      >
        Hameed Latif Hospital Lahore
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        Hameed Latif Hospital is a tertiary care and postgraduate teaching
        hospital with has 24-hour emergency services located in Lahore. It is a
        gold standard in the provision of quality healthcare for patients, with
        over 1000 physicians, nurses, paramedics, and support personnel working
        to assure patient care.
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        Hameed Latif hospital has 324 beds and a well-equipped blood bank as
        well as diagnostic services. Moreover, the hospital Diagnostic
        facilities, such as the Laboratory and Radiology departments, are
        outfitted with cutting-edge technology.
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        It is supported by 14 state-of-the-art operating rooms, two angioplasty
        and angiography units, delivery rooms, medical intensive care units,
        neonatal intensive care units, and well-equipped clinical indoor and
        outdoor departments.
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        The diagnostic department at HLH provides services to all clinical
        departments 24 hours a day, seven days a week. For many years,
        Obstetrics & Gynecology and Pediatrics were the flagship departments,
        but now they have many new specialties such as Cardiac Surgery,
        Neurosurgery, Angioplasty, Angiography, and Neuro & Peripheral
        Intervention, Orthopedic Surgery, Urology, and Radiology.
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        For admitted cases, Pulmonology, Endocrinology, Gastroenterology,
        Nephrology & Dialysis, Lithotripsy, Laparoscopic Surgery, and Thoracic
        Surgery are all available.
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        The hospital is backed up by great pharmacy and ambulance services that
        are accessible to all patients 24 hours a day, seven days a week.
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        COVID-19 Services:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        In response to the pandemic, the Hameed Latif Hospital has built up:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        <ul>
          {covidList.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        Skilled Medical and paramedical personnel are available to care for
        COVID-19 patients 24 hours a day, seven days a week. They have also
        created a dedicated department within the Emergency Department to
        identify and treat possible COVID-19 patients.
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        The hospital provides testing services to patients through the
        cutting-edge HLH-Laboratories. Moreover, the Hameed Latif Blood Bank now
        provides "Plasmapheresis" services to its patients.{" "}
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        Hameed Latif Hospital doctors:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        <ul>
          {facilities.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        Hameed Latif Hospital Departments:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        <ul>
          {departments.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        Services Provided by Hameed Latif Hospital:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        Some of the services provided by Hameed Latif Hospital to its patients
        include the following:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        <ul>
          {services.map((data) => {
            return (
              <li>
                <b>{data.name}</b>
                {data.desc}
              </li>
            );
          })}
        </ul>
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        Types of Wards and Rooms at Hameed Latif Hospital:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        <ul>
          {wards.map((data) => {
            return (
              <li>
                <b>{data.name}</b>
                {data.desc}
              </li>
            );
          })}
        </ul>
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        Hameed Latif Hospital Lab Services:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        The Hameed Latif Hospital has its own pharmacy and a highly advanced
        laboratory. This lab is of an international standard and provides
        various test reports.
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        You can get any of the following tests done from the Hameed Latif lab:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        <ul>
          {labServices.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        Common lab tests available at Hameed Latif Hospital along with their
        prices are mentioned in the table below.
      </Typography>
      <Grid container sx={{ width: 400, mb: 2 }}>
        <PriceTable />
      </Grid>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        Hameed Latif Hospital Lab Services:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        The Hameed Latif hospital lab also offers free home sampling services to
        patients. This service can be a great advantage if you can not travel to
        the hospital due to any disease or travel constraints.
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        Other Facilities at Hameed Latif Hospital:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        The following facilities are available at the new tower of Hameed Latif
        Hospital Lahore:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        <ul>
          {otherFacilities.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        Hameed Latif Hospital’s Doctors List:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 1 }}
      >
        The doctors list of top five specialists at Hammed Latif Hospital is
        below:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        <ul>
          {doctorsList.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        Book an appointment at Hameed Latif Hospital Lahore:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        The doctors at Hameed Latif Hospital can be booked through Marham's
        website, Android App, or iOS App on Apple Store.
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        Hameed Latif Hospital Fee Range:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        At Hameed Latif Hospital, consultation fees range from 2000-3500 rupees.
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        Hameed Latif Hospital Address:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        14- Abu Baker Block New Garden Town, Lahore
      </Typography>
      <Typography
        fontSize="1rem"
        fontWeight="bold"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        Hameed Latif Hospital Contact Number:
      </Typography>
      <Typography
        fontSize="1rem"
        fontFamily="Consolas"
        sx={{ width: "95%", pb: 2 }}
      >
        The Hameed Latif Hospital's doctors can be reached via Marham's
        helpline: 0311-1222398.
      </Typography>
    </Grid>
  );
};

export default HospitalAbout;
