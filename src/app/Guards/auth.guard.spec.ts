import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  function evaluar(autenticado: boolean) {
    const router = { navigate: vi.fn() };
    const auth = { estaAutenticado: () => autenticado };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: auth },
        { provide: Router, useValue: router }
      ]
    });

    const permitido = TestBed.runInInjectionContext(
      () => authGuard({} as any, {} as any)
    );

    return { permitido, router };
  }

  it('permite el acceso cuando existe una sesión autenticada', () => {
    const { permitido, router } = evaluar(true);

    expect(permitido).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('bloquea el acceso y redirige al login cuando no existe sesión', () => {
    const { permitido, router } = evaluar(false);

    expect(permitido).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
