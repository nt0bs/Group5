"""Initial migration

Revision ID: c403af0112f1
Revises: 
Create Date: 2024-10-06 11:43:51.507258

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c403af0112f1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('jobs', schema=None) as batch_op:
        batch_op.add_column(sa.Column('location', sa.String(length=100), nullable=True))
        batch_op.add_column(sa.Column('category', sa.String(length=50), nullable=True))
        batch_op.alter_column('description',
               existing_type=sa.VARCHAR(length=500),
               type_=sa.String(length=255),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('jobs', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.String(length=255),
               type_=sa.VARCHAR(length=500),
               existing_nullable=True)
        batch_op.drop_column('category')
        batch_op.drop_column('location')

    # ### end Alembic commands ###
