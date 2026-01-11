import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// 문의 목록 조회
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('x-admin-password');

    if (authHeader !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 }
      );
    }

    const { data: inquiries, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '문의 목록을 불러오는 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json(
      { error: '문의 목록을 불러오는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 상태 업데이트
export async function PATCH(request: NextRequest) {
  try {
    const authHeader = request.headers.get('x-admin-password');

    if (authHeader !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID와 상태를 입력해주세요.' },
        { status: 400 }
      );
    }

    const validStatuses = ['대기중', '연락완료', '상담완료'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: '올바른 상태값이 아닙니다.' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('inquiries')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '상태 업데이트 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error updating inquiry:', error);
    return NextResponse.json(
      { error: '상태 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 문의 삭제
export async function DELETE(request: NextRequest) {
  try {
    const authHeader = request.headers.get('x-admin-password');

    if (authHeader !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID를 입력해주세요.' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('inquiries')
      .delete()
      .eq('id', Number(id));

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '삭제 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return NextResponse.json(
      { error: '삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
