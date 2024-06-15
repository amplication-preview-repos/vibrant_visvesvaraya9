import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConsultantModuleBase } from "./base/consultant.module.base";
import { ConsultantService } from "./consultant.service";
import { ConsultantController } from "./consultant.controller";
import { ConsultantResolver } from "./consultant.resolver";

@Module({
  imports: [ConsultantModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConsultantController],
  providers: [ConsultantService, ConsultantResolver],
  exports: [ConsultantService],
})
export class ConsultantModule {}
