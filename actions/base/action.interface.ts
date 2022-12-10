import { Verification } from '../../verifications/verification.abstract';

export interface Action {
  verify: Verification;
}
