'use client'

import { Button } from '@/components/ui/button'
import { signOut } from '../actions'

export function SignOutButton() {
    return (
        <Button
            variant="ghost"
            onClick={() => signOut()}
            className="text-red-500 hover:text-red-600 hover:bg-red-50"
        >
            Sair
        </Button>
    )
}
