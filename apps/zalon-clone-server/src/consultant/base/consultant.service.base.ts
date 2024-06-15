/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Consultant as PrismaConsultant,
  Appointment as PrismaAppointment,
} from "@prisma/client";

export class ConsultantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ConsultantCountArgs, "select">
  ): Promise<number> {
    return this.prisma.consultant.count(args);
  }

  async consultants<T extends Prisma.ConsultantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultantFindManyArgs>
  ): Promise<PrismaConsultant[]> {
    return this.prisma.consultant.findMany<Prisma.ConsultantFindManyArgs>(args);
  }
  async consultant<T extends Prisma.ConsultantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultantFindUniqueArgs>
  ): Promise<PrismaConsultant | null> {
    return this.prisma.consultant.findUnique(args);
  }
  async createConsultant<T extends Prisma.ConsultantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultantCreateArgs>
  ): Promise<PrismaConsultant> {
    return this.prisma.consultant.create<T>(args);
  }
  async updateConsultant<T extends Prisma.ConsultantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultantUpdateArgs>
  ): Promise<PrismaConsultant> {
    return this.prisma.consultant.update<T>(args);
  }
  async deleteConsultant<T extends Prisma.ConsultantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultantDeleteArgs>
  ): Promise<PrismaConsultant> {
    return this.prisma.consultant.delete(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.consultant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }
}