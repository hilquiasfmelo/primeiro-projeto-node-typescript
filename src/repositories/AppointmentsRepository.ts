import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// Interfaces
interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  // Função que verifica se já existe um agendamento nessa data
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  // Função para criação do agendamento
  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({
      provider,
      date,
    });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
