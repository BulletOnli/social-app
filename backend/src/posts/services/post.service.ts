import { Injectable } from '@nestjs/common';
import { DetaClass } from 'src/deta.class';
import { Post } from '../types';

@Injectable()
export class PostService extends DetaClass {
	async exists(id: string): Promise<boolean> {
		if (await this.postsBase.get(id)) {
			return true;
		} else {
			return false;
		}
	}

	async findOne(id: string): Promise<Post | undefined> {
		return (await this.postsBase.get(id)) as Post;
	}
}