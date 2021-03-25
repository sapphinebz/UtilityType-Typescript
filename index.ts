interface Employee {
  empId: string;
  empName: string;
  birthdate: Date;
}

type OptionalEmployee = Partial<Employee>;
type RequiredEmployee = Required<Employee>;
type PickEmployee = Pick<Employee,'empId'>;
type OmitEmployee = Omit<Employee,'birthdate'>;