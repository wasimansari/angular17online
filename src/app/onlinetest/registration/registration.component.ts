import { Component, OnInit } from '@angular/core';

import {student_class,student_subject,student_Stream} from '../../utility/constant' 
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { firebaseApp } from '../../firebaseConfig';
import {getDatabase,ref, set, push} from "firebase/database";
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  studentClass: string[] = [];
  studentSubject: string[] = [];
  student_stream: string[] = [];
  student_Stream_subject: string[] = [];
  subject: string;
  student_class: string;
  select_stream: string;
  isStream: boolean = false;
  isSubject: boolean = false;
  selectedClass: string;
  formgroup: FormGroup;
  isStreamHide: boolean = true;
  db = getDatabase(firebaseApp);
  auth = getAuth(firebaseApp);
  constructor(private fb: FormBuilder) {
    this.formgroup = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      fatherName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      motherName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      dob: ['', [Validators.required, this.minAgeValidator(4)]],
      gender: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(5)],
      ],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      rollNo: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.alphanumericValidator(),
        ],
      ],
      className: ['', [Validators.required]],
      stream: ['', [Validators.required]],
      subject: ['', [Validators.required]],
    });
    this.toggleDropdownFields(this.isStream);
  }

  ngOnInit(): void {
    this.studentClass = student_class;
    this.studentSubject = student_subject;
  }

  alphanumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null; // No error if value is empty
      }
      const isValid = /^[a-zA-Z0-9]+$/.test(value);
      return isValid ? null : { alphanumeric: true }; // Return error object if invalid
    };
  }

  selectSubject(subject) {
    this.toggleDropdownFields(this.isStream);
  }

  selectClass(st_class) {
    const classSubjects = {
      'Class 1-5': ['Math', 'Hindi', 'Science', 'Sanskrit'],
      'Class 6-8': ['Math', 'Hindi', 'Science', 'Social Science', 'English'],
      'Class 9-10': [
        'Math',
        'Hindi',
        'Science',
        'Social Science',
        'English',
        'Urdu',
      ],
    };
    this.studentSubject = [];
    this.student_Stream_subject = [];
    this.isSubject = true;
    this.selectedClass = st_class;
    if (
      ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'].includes(st_class)
    ) {
      this.updateClassSettings(false, classSubjects['Class 1-5']);
    } else if (['Class 6', 'Class 7', 'Class 8'].includes(st_class)) {
      this.updateClassSettings(false, classSubjects['Class 6-8']);
    } else if (['Class 9', 'Class 10'].includes(st_class)) {
      this.updateClassSettings(false, classSubjects['Class 9-10']);
    } else if (['Class 11', 'Class 12'].includes(st_class)) {
      this.isStream = true;
      this.isSubject = false;
      this.setStream();
    }
  }

  updateClassSettings(isStream, subjects) {
    this.isStream = isStream;
    this.formgroup.get('subject')?.setValidators([Validators.required]);
    this.toggleDropdownFields(isStream);
    this.student_Stream_subject.push(...subjects);
  }

  setStream() {
    this.student_stream = [];
    this.student_stream.push('Arts', 'Science', 'Commerce');
    this.isSubject = false;
  }

  selectStream(select_stream) {
    this.isSubject = true;
    if (
      this.selectedClass === 'Class 11' ||
      this.selectedClass === 'Class 12'
    ) {
      const classData = student_Stream.find(
        (subj) => subj.className === this.selectedClass
      );
      if (classData && classData.stream[select_stream]) {
        this.student_Stream_subject = [...classData.stream[select_stream]]; // Copy the selected stream's subjects
      } else {
        alert('Stream not found or invalid class');
      }
    }
  }

  onSubmit() {
    console.log(this.formgroup);
    if (this.formgroup.valid) {
      this.signUp();
      this.saveData();
      console.log(this.formgroup.value);
    } else {
      console.log('Form is invalid.');
    }
  }

  signUp() {
    createUserWithEmailAndPassword(
      this.auth,
      this.formgroup.value.email,
      this.formgroup.value.password
    ).then((value) => console.log(value));
  }

  saveData() {
    if (this.formgroup.valid) {
      const formData = this.formgroup.value;
      const usersRef = ref(this.db, 'users');
      const newUserRef = push(usersRef); // Generate a new unique reference

      set(newUserRef, formData)
        .then(() => {
          console.log('Data saved successfully!');
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    } else {
      console.error('Form is invalid');
    }
  }

  toggleDropdownFields(stream) {
    if (stream) {
      this.formgroup.get('stream')?.setValidators([Validators.required]);
      this.formgroup.get('subject')?.clearValidators();
    } else {
      this.formgroup.get('subject')?.setValidators([Validators.required]);
      this.formgroup.get('stream')?.clearValidators();
    }
    this.formgroup.get('subject')?.updateValueAndValidity();
    this.formgroup.get('stream')?.updateValueAndValidity();
  }

  toggleFields() {
    this.isStream = !this.isStream;
    // if (this.isStream) {
    //   this.formgroup.get('email')?.reset();
    // } else {
    //   this.formgroup.get('rollNo')?.reset();
    // }
    this.toggleDropdownFields(this.isStream);
  }

  get dob() {
    return this.formgroup.get('dob');
  }

  minAgeValidator(minAge: number) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const today = new Date();
      const dob = new Date(control.value);
      let age = today.getFullYear() - dob.getFullYear();
      const monthDifference = today.getMonth() - dob.getMonth();

      // Adjust age if birthday hasn't happened yet this year
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < dob.getDate())
      ) {
        age--;
      }

      return age < minAge ? { minAge: true } : null;
    };
  }
}
